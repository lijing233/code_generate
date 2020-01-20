const searchFormConfig = {
  ref: 'searchForm',
  model: 'searchForm',
  formItems: [
    {
      prop: 'name',
      type: 'input',
      config: {
        model: "searchForm.name",
        placeholder: "",
        disabled: "false"
      }
    }
  ]
}

export {
  searchFormConfig
}