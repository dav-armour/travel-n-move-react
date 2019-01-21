export const createSelectNumberRange = (
  start,
  end,
  suffix = "",
  prefix = ""
) => {
  var options = [];
  for (var i = start; i <= end; i++) {
    options.push({
      value: i,
      label: prefix + i + suffix
    });
  }
  return options;
};
