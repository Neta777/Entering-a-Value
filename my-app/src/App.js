import React, { useState } from "react";
import "./App.css";

export const App = () => {
	const currentYear = new Date().getFullYear();
	const [value, setTheValue] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [listItems, setListItems] = useState([]);
	const onInputButtonClick = () => {
		const theValueInput = prompt(`enter the value`);
		if (!theValueInput || theValueInput.length < 3) {
			setErrorMessage("The value should be at least 3 or more symbols");
		} else {
			setTheValue(theValueInput);
			setErrorMessage("");
		}
	};
	const addToTheList = () => {
		if (value.length >= 3) {
			const newItem = { id: Date.now(), value: value };
			setListItems([...listItems, newItem]);
			setTheValue("");
		}
	};
	return (
		<>
			<div className="app">
				<h1 className="page-heading">Ввод значения</h1>
				<p className="no-margin-text">
					Текущее значение <code>value</code>: "
					<output className="current-value">{value}</output>"
				</p>
				<div className="error">{errorMessage}</div>
				<div className="buttons-container">
					<button className="button" onClick={onInputButtonClick}>
						Ввести новое
					</button>
					<button
						className="button"
						disabled={value.length < 3}
						onClick={addToTheList}
					>
						Добавить в список
					</button>
				</div>
				{listItems.length > 0 ? (
					<div className="list-container">
						<h2 className="list-heading">Список:</h2>
						<ul className="list">
							{listItems.map((item) => (
								<li className="list-item" key={item.id}>
									{item.value}
								</li>
							))}
						</ul>
					</div>
				) : (
					<div className="list-container">
						<h2 className="list-heading">Список:</h2>
						<p className="no-margin-text">
							Нет добавленных элементов
						</p>
					</div>
				)}
				<p>Current Year: {currentYear}</p>
			</div>
		</>
	);
};
