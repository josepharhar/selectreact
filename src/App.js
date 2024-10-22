import { useState, useRef, useLayoutEffect, useEffect } from "react";

const options = [
  [
    {
      name: 'one',
      color: 'black'
    },
    {
      name: 'two',
      color: 'black'
    },
    {
      name: 'three',
      color: 'black'
    }
  ],
  [
    {
      name: 'four',
      color: 'red'
    },
    {
      name: 'five',
      color: 'green'
    },
    {
      name: 'six',
      color: 'blue'
    }
  ]
];

export default function Select() {
  const [optionsIndex, setOptionsIndex] = useState(0);
  const ref = useRef(null);

  function handleChangeClick() {
    setOptionsIndex(optionsIndex == 1 ? 0 : 1);
  }

  useEffect(() => {
    /*if (!ref.current) return;
    const select = ref.current.querySelector('select');
    const selectedoption = ref.current.querySelector('selectedoption');
    selectedoption.innerHTML = select.selectedOptions[0].innerHTML;*/
  });

  return (
    <div ref={ref}>
      <select>
        <button>
          <selectedoption></selectedoption>
        </button>
        {options[optionsIndex].map(option => {
          return (
            <div key={option.name}>
              <option selected={option.selected}>
                <span className={'circle'} style={{color: option.color}}>⬤</span>
                {option.name}
              </option>
            </div>
          );
        })}
      </select>
      <button onClick={handleChangeClick}>change colors</button>
    </div>
  );
}
