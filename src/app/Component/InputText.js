import { FormControl, TextField, Box } from "@mui/material";

export default function InputText({
  label = "",
  value = "",
  onChange = () => {},
  name = "",
  placeholder,
  disabled = false,
  rows = 1,
  maxWidth = "400px"
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "start",
        justifyContent: "left",
      }}
    >
      <FormControl
        fullWidth
        sx={{ paddingRight: "16px", marginBottom: "20px", borderRadius: 0,  maxWidth,  }}
      >
        <TextField
          disabled={disabled}
          placeholder={placeholder}
          name={name}
          label={label}
          fullWidth
          variant="outlined"
          onChange={onChange}
          value={value}
          multiline
          rows={rows}
          sx={{ backgroundColor: "#ffffff", borderRadius: 0 }}
        />
      </FormControl>
    </Box>
  );
}
