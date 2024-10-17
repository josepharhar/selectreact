const options = [
  {
    name: 'Denmark',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/318px-Flag_of_Denmark.svg.png'
  },
  {
    name: 'Spain',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/320px-Bandera_de_Espa%C3%B1a.svg.png'
  },
  {
    name: 'Slovenia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Flag_of_Slovenia.svg/320px-Flag_of_Slovenia.svg.png'
  }
];

export default function Select() {
  return (
    <select>
      <button>
        <selectedoption></selectedoption>
      </button>
      {options.map(option => {
        return (
          <div key={option.name}>
            <option>
              <img src={option.img}></img>
              {option.name}
            </option>
          </div>
        );
      })}
    </select>
  );
}
