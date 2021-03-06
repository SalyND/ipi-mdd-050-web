import Route from '@ember/routing/route';

export default Route.extend({
  page:0,
  size:10,
  sortDirection:"ASC",
  sortProperty:"matricule",
  queryParams: {
    page: {
      refreshModel: true
    },
    size: {
      refreshModel: true
    },
    sortDirection: {
      refreshModel: true
    },
    sortProperty: {
      refreshModel: true
    }
  },
  model(params){
    return this.store.query('employe', {
      page: params.page ? params.page : this.get("page"),
      size: params.size ? params.size : this.get("size"),
      sortDirection: params.sortDirection ? params.sortDirection : this.get("sortDirection"),
      sortProperty: params.sortProperty ? params.sortProperty : this.get("sortProperty"),
    });
  },
});
