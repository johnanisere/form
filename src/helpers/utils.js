export const getTimeFrame = (minTime, maxTime) => {
  const now = new Date();
  const day = now.getDate();
  const minFrame = now.setDate(day + minTime);
  const maxFrame = now.setDate(day + maxTime);
  const min = new Date(minFrame).toISOString().slice(0, -8);
  const max = new Date(maxFrame).toISOString().slice(0, -8);
  const data = {
    min,
    max
  };
  return data;
};

export const onStripByKey = (list, name) =>
  list.map(value => (name ? value[name] : value.name));

export const getFormattedDate = date =>
  new Date(date || new Date()).toISOString().slice(0, -1);

export const getIds = (list, data, extra = {}) =>
  list.map(value => ({
    ...data.find(element => element.name === value),
    ...extra
  }));

export const getRelevantData = resp => ({
  id: resp.id,
  title: resp.title,
  skills: onStripByKey(resp.skills),
  city: resp.role_info.city,
  description: resp.description,
  backgrounds: onStripByKey(resp.backgrounds),
  salary: resp.specifics_info.salary,
  latest_end_date: getFormattedDate(resp.latest_end_date),
  earliest_start_date: getFormattedDate(resp.earliest_start_date),
  selection_process: resp.role_info.selection_process,
  applications_close_date: getFormattedDate(resp.applications_close_date)
});

export const constructUpdate = update => ({
  opportunity: {
    title: update.title,
    skills: [...update.skills],
    backgrounds: [...update.backgrounds],
    specifics_info: { salary: update.salary },
    description: update.description,
    role_info: {
      city: update.city,
      selection_process: update.selection_process
    },
    latest_end_date: update.latest_end_date,
    earliest_start_date: update.earliest_start_date,
    applications_close_date: update.applications_close_date,
    opportunity_id: update.id
  }
});

export const handleErrors = (err, toastError) => {
  if (err.response && err.response.data && err.response.data.error) {
    toastError(err.response.data.error);
  } else {
    toastError(err.message);
  }
};
