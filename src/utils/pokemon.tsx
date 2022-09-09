/**
 * pokeApiから、ポケモンの個別の情報を取得するためのUrlの一覧を取得する
 */
export const getPokemonInfoUrl = (url: string) => {
	return new Promise<pokemonListResponse>((resolve, reject) => {
		fetch(url) /* pokeAPI からデータを受信、完了したら次の処理へ */
			.then((res) => { return res.json() }) /* resをjson に変換する。完了したら次の処理へ */
			.then((data: pokemonListResponse) => resolve(data)); /* APIのレスポンスから作成したjson データを結果としてresolve を実行し処理の完了を通知する */
	});
}

/* 個別のポケモンのデータを取得する */
export const getPokemon = (url: string) => {
	return new Promise<pokemonInfo>((resolve, reject) => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				resolve(data)
			});
	})
}
