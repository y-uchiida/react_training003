import { useEffect, useState } from 'react';
import './App.css'
import { Card } from './components/Cards/Card';
import { Navbar } from './components/Navbar/Navbar';
import { getPokemonInfoUrl, getPokemon } from './utils/pokemon';



function App() {
  const initialURL = 'https://pokeapi.co/api/v2/pokemon';

  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState<pokemonInfo[]>([]);
  const [prevUrl, setPrevUrl] = useState<string>('');
  const [nextUrl, setNextUrl] = useState<string>('');

  /**
   * 現在表示しているポケモンのデータの前のページを表示する
   */
  const handlePrevPage = async () => {
    if (prevUrl === null) {
      return;
    }
    setLoading(true);
    let data = await getPokemonInfoUrl(prevUrl);
    await loadPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  };

  /**
   * 現在表示しているポケモンのデータの次のページを表示する
   */
  const handleNextPage = async () => {
    if (nextUrl === null) {
      return;
    }
    setLoading(true);
    let data = await getPokemonInfoUrl(nextUrl);
    await loadPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  };

  /* useEffect() で画面ロード時に実行する処理を記述
   * ここでPokeAPIからデータを取得してくる
   */
  useEffect(() => {
    const fetchPokemonData = async () => {
      // すべてのポケモンのデータを取得する
      let res = await getPokemonInfoUrl(initialURL);

      // 各ポケモンの詳細データを取得する
      loadPokemon(res.results);

      // 取得ができたら、次のデータを取得するためのURLをnextUrlに保存する
      setNextUrl(res.next);
      setPrevUrl(res.previous);

      // データの取得が終わった時点で、ローディングを非表示にする
      setLoading(false);
    };
    fetchPokemonData();
  }, []);

  const loadPokemon = async (data: { name: string, url: string }[]) => {
    let _pokemonData = await Promise.all<pokemonInfo>(
      data.map((pokemon) => {
        return getPokemon(pokemon.url);
      })
    );
    setPokemonData(_pokemonData);
  };

  return (
    <>
      <Navbar />
      <div className="App">
        {loading ? (<h1>loading...</h1>) : (
          <div className='pokemonCardContainer'>
            {pokemonData.map((pokemon, index) => {
              return <Card key={index} pokemon={pokemon}></Card>
            })}
          </div>
        )}
        <div>
          <button className='btn' onClick={handlePrevPage}>前へ</button>
          <button className='btn' onClick={handleNextPage}>次へ</button>
        </div>
      </div>
    </>
  );
}

export default App
