const endPoint = 'https://api.github.com/search/repositories'

export const model = {
  id: {
    title: '',
    isSortable: false,
    isVisible: false
  },
  full_name: {
    title: 'Name',
    isSortable: true,
    isVisible: true,
    fieldWithLink: 'html_url'
  },
  html_url: {
    title: '',
    isSortable: false,
    isVisible: false
  },
  stargazers_count: {
    title: 'Stars',
    isSortable: true,
    isVisible: true
  },
  license: {
    title: 'License',
    isSortable: true,
    isVisible: true,
    format: license => license ? license.name : 'None'
  },
}

export const buildQuery = param => `${endPoint}?q=${encodeURIComponent(param)}+in:name`

export const mapResults = results => {
  const columns = Object.entries(model)

  return results.map(result => {
    const row = {}

    for (let [ name, { format } ] of columns ) {
      row[name] = format ? format(result[name]) : result[name]
    }

    return row
  })
}

export const visibleFields = Object
  .entries(model)
  .map(([name, { title, isSortable, isVisible }]) => ({ name, title, isSortable, isVisible }))
  .filter(col => col.isVisible)

export const sortResults = (results, feature, isAscending) => {
  const sorter = (item1, item2) => {
    const item1Feature = item1[feature]
    const item2Feature = item2[feature]

    if (item1Feature > item2Feature) {
      return isAscending ? 1 : -1
    }

    if (item1Feature < item2Feature) {
      return isAscending ? -1 : 1
    }

    return 0;
  }

  return results.sort(sorter)
}