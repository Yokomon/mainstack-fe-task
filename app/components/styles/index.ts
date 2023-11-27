export const customStyles = {
  input: (base: any) => ({
    ...base,
    "input:focus": {
      boxShadow: "none",
    },
  }),
  option: (base: any) => ({
    ...base,
    backgroundColor: "none",
    color: "black",
    margin: "5px",
  }),
  control: (base: any) => ({
    ...base,
    cursor: "pointer",
    borderRadius: "15px",
    padding: "5px 7px",
    backgroundColor: "#eff1f6",
    border: "none",
  }),
  multiValue: (base: any) => ({
    ...base,
    backgroundColor: "none",
    borderRadius: "4px",
    marginRight: "4px",
  }),
  menu: (base: any) => ({
    ...base,
    fontWeight: 500,
    fontSize: 15,
    letterSpacing: "-0.025em",
  }),
};
