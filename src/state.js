let state = {
  ClientRevievs: [
    { id: 1, ClientReviev: 'спасибо? были у вас в прощсе отлично' },


  ],
  massedesData: [
    { id: 1, massedes: 'Alecscscx' },
    { id: 2, massedes: 'Ale' },
    { id: 2, massedes: 'Alescscc' },
    { id: 3, massedes: 'Alevg gh' },
    
  ],

  DialogsData: [
    { id: 1, name: 'Alexdgrg ' },
    { id: 2, name: 'Alegr grt43t4t43tg' },
    { id: 3, name: 'Vasgr egrggrgerg' },
    
  ],

  GrumTebl: [
    { id: 1, idClient: 'номер', nameClient: 'имя клиента', nameDog: 'кличка животного',
     grumer: 'мастер', dateGrum: 'дата'},
     { id: 2, idClient: '1', nameClient: 'Sveta', nameDog: 'tobik',
     grumer: 'Liza', dateGrum: '12.15'},
     { id: 3, idClient: '2', nameClient: 'Svetka', nameDog: '4mobik',
     grumer: 'Liza', dateGrum: '13.15'},
  ],

  




  testmassegeData:[
    {id:1, testmassege:'ghgfwe ffefefefefef ef ew hghgh',},
    {id:1, testmassege:'ghgfwe ',},
           ] 
}

export let addtestmassegeData =(testmassege)=>{
  let massege = {
    id:3,
    testmassege: testmassege
  }
  state.testmassegeData.push(massege)
}

export let addGrumTebl=(GrumTebl)=>{
  let bloc ={
    id: 5,
    idClient: 'ном',
    nameClient: 'имя клиеуанта', 
    nameDog: 'кличка живоаууатного',
    grumer: 'масуауатер',
    dateGrum: 'дауауаата',
  }
state.GrumTebl.push(bloc)
}

export default state;