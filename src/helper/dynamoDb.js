const { DynamoDBClient, ScanCommand } = require("@aws-sdk/client-dynamodb");
const {
  DynamoDBDocumentClient,
  PutCommand,
  UpdateCommand,
  GetCommand,
  QueryCommand,
  DeleteCommand,
} = require("@aws-sdk/lib-dynamodb");

const marshallOptions = {
  convertEmptyValues: false,
  removeUndefinedValues: true,
  convertClassInstanceToMap: false,
};

const unmarshallOptions = {
  wrapNumbers: false,
};

const translateConfig = { marshallOptions, unmarshallOptions };

const dynamoClient = new DynamoDBClient({
  region: "ap-southeast-1",
  credentials: {
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.ACCESS_KEY_SECRET,
  },
});

let documentClient = DynamoDBDocumentClient.from(dynamoClient, translateConfig);

const create = async ({ item, tableName }) => {
  const params = {
    Item: item,
    TableName: tableName,
  };

  try {
    const response = await documentClient.send(new PutCommand(params));
    return response;
  } catch (error) {
    throw new Error(error.stack);
  }
};

const find = async ({ pk, sk, filter, tableName, limit }) => {
  let params = {
    TableName: tableName,
  };

  if (filter) {
    params = { ...params, ...filter };
  }

  if (limit) {
    params["Limit"] = limit;
  }

  if (!pk) {
    const data = await documentClient.send(new ScanCommand(params));
    return data;
  }

  if (sk) {
    params["KeyConditionExpression"] = "pk = :pk AND sk = :sk";
    params["ExpressionAttributeValues"] = { ":pk": pk, ":sk": sk };
  } else {
    params["KeyConditionExpression"] = "pk = :pk";
    params["ExpressionAttributeValues"] = { ":pk": pk };
  }
  console.log(params);

  const data = await documentClient.send(new QueryCommand(params));
  return data;
};

const findOne = async ({ pk, sk, tableName, attributesToGet }) => {
  try {
    let params = {
      TableName: tableName,
      Key: {
        pk,
      },
    };

    if (sk) {
      params["Key"]["sk"] = sk;
    }

    if (attributesToGet && attributesToGet.length > 0) {
      params["AttributesToGet"] = attributesToGet;
    }

    const data = await documentClient.send(new GetCommand(params));
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const updateOne = async ({ item, tableName }) => {
  const itemKeys = Object.keys(item).filter((k) => !["pk", "sk"].includes(k));
  const params = {
    TableName: tableName,
    UpdateExpression: `SET ${itemKeys
      .map((k, index) => `#field${index} = :value${index}`)
      .join(", ")}`,
    ExpressionAttributeNames: itemKeys.reduce(
      (accumulator, k, index) => ({
        ...accumulator,
        [`#field${index}`]: k,
      }),
      {}
    ),
    ExpressionAttributeValues: itemKeys.reduce(
      (accumulator, k, index) => ({
        ...accumulator,
        [`:value${index}`]: item[k],
      }),
      {}
    ),
    Key: {
      pk: item["pk"],
      ...(item["sk"] ? { sk: item["sk"] } : {}),
    },
    ReturnValues: "ALL_NEW",
  };

  const response = await documentClient.send(new UpdateCommand(params));
  return response;
};

const findByIndex = async ({
  indexName,
  query,
  limit,
  tableName,
  attributesToGet,
  FilterExpression,
  ExpressionAttributeValues,
  ExpressionAttributeNames,
}) => {
  try {
    const queryKeys = Object.keys(query);
    let params = {
      TableName: tableName,
      KeyConditionExpression: `${queryKeys
        .map((k, index) => `${k} = :value${index}`)
        .join(", ")}`,
      ExpressionAttributeValues: queryKeys.reduce(
        (accumulator, k, index) => ({
          ...accumulator,
          [`:value${index}`]: query[k],
        }),
        {}
      ),
    };

    if (indexName) {
      params["IndexName"] = indexName;
    }

    if (limit) {
      params["Limit"] = limit;
    }

    if (FilterExpression) {
      params["FilterExpression"] = FilterExpression;
    }

    if (ExpressionAttributeValues) {
      params["ExpressionAttributeValues"] = {
        ...params["ExpressionAttributeValues"],
        ...ExpressionAttributeValues,
      };
    }

    if (ExpressionAttributeNames) {
      params["ExpressionAttributeNames"] = ExpressionAttributeNames;
    }

    if (attributesToGet && attributesToGet.length > 0) {
      //params["Select"] = "SPECIFIC_ATTRIBUTES"
      params["ProjectionExpression"] = attributesToGet.join(", ");
    }

    //console.log(params);

    const data = await documentClient.send(new QueryCommand(params));
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

const deleteOne = async ({ pk, sk, tableName }) => {
  try {
    let params = {
      TableName: tableName,
      Key: {
        pk,
        sk,
      },
    };

    //console.log(params);

    const data = await documentClient.send(new DeleteCommand(params));
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

module.exports = {
  create,
  find,
  findOne,
  updateOne,
  findByIndex,
  deleteOne,
};
