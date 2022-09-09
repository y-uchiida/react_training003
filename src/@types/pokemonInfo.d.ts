/* pokemonApi から取得したポケモンの詳細データのうち、利用するデータのみ型として定義する */
type pokemonInfo = {
	name: string,
	types: pokemonType[],
	sprites: sprites,
	weight: number,
	height: number,
	abilities: { ability: ability, is_hidden: boolean, slot: number }[]
};

type pokemonType = {
	name: string
}

type sprites = {
	front_default: string
}

type ability = {
	name: string,
	url: string
}
