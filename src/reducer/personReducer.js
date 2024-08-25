export default function personReducer(person, action) {
  switch (action.type) {
    case "updated": {
      const { answer, changeName } = action;
      return {
        ...person,
        mentos: person.mentos.map((mentos) => {
          if (answer === mentos.name) {
            return { ...mentos, name: changeName };
          }
          return mentos;
        }),
      };
    }
    case "nameAdd": {
      const { newMento, newMentoTitle } = action;
      return {
        ...person,
        mentos: [
          ...person.mentos,
          {
            id: person.mentos.length,
            name: newMento,
            title: newMentoTitle,
          },
        ],
      };
    }
    case "nameDelete": {
      const { deleteMento } = action;
      return {
        ...person,
        mentos: person.mentos.filter((mentos) => {
          return mentos.name !== deleteMento;
        }),
      };
    }
    default: {
      throw Error(`알 수 없는 타입이다 : ${action.type}`);
    }
  }
}
