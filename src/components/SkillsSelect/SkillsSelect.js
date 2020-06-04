import React, { useEffect } from "react";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "./theme";

const SkillsSelect = ({ skills, filter }) => {
  const [selectedSkills, selectSkills] = React.useState([]);

  useEffect(() => {
    const rowId = String(filter.columnDef.tableData.id);
    filter.onFilterChanged(rowId, selectedSkills);
  }, [selectedSkills]);

  return (
    <ThemeProvider theme={theme}>
      <FormControl fullWidth>
        <Select
          autoWidth
          multiple
          value={selectedSkills}
          onChange={(e) => selectSkills(e.target.value)}
        >
          {skills.map((skill) => (
            <MenuItem key={skill} value={skill}>
              {skill}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </ThemeProvider>
  );
};

export default SkillsSelect;
