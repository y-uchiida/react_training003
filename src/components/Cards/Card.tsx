import React from 'react'
import './Card.css';

type props = {
	pokemon: pokemonInfo
}

export const Card = ({ pokemon }: props) => {
	return (
		<div className='card'>
			<div className="cardImage">
				<img src={pokemon.sprites.front_default} alt="{pokemon.name}" className="src" />
			</div>
			<h3 className='cardName'>
				{pokemon.name}
			</h3>
			<div className='cardTypes'>
				<div className=''>タイプ</div>
				{pokemon.types.map((type, index) => {
					return (
						<div key={index}>
							<span className='typeName'>{type.name}</span>
						</div>)
				})}
			</div>
			<div className='cardInfo'>
				<div className='cardData'>
					<p className='title'>重さ: {pokemon.weight}</p>
				</div>
				<div className='cardData'>
					<p className='title'>高さ: {pokemon.height}</p>
				</div>
				<div className='cardData'>
					<p className='title'>アビリティ: {pokemon.abilities[0].ability.name}</p>
				</div>
			</div>
		</div>
	)
}
