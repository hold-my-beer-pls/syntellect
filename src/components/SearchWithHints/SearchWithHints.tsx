import React, {useCallback, useEffect, useState} from "react";
import {getCountryByName} from "../../api/apiService";
import {ISearchWithHintProps, ISearchResultProps} from "./SearchWithHints.types";
import './SearchWithHints.css';

export const SearchWithHints: React.FC<ISearchWithHintProps> = ({maxHints}) => {
    const [searchResult, setSearchResult] = useState<ISearchResultProps[]>([])
    const [searchText, setSearchText] = useState<string>('')

    useEffect(() => {
        const searchCountry = async ()  => {
            const response = await getCountryByName(searchText)
            response.length < maxHints ? setSearchResult(response) : setSearchResult(response.slice(0, maxHints))
            console.log(response)
        }
        const debounce = setTimeout(() => {
            searchCountry()
        }, 300)
        return () => clearTimeout(debounce)
    }, [searchText])

    const itemClickHandler = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        setSearchText(e.currentTarget.getElementsByClassName('resultText__name')[0].innerHTML)
    }, [])

    const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value)
    }

    return(
        <div className={'search'}>
            <input className={'searchInput'} type="text" value={searchText} onChange={searchHandler} />
            <div className={'search__result'}>
                {
                    searchResult && searchResult.map((item: ISearchResultProps) =>
                        <div
                            className={'result'}
                            key={item.flag}
                            onClick={itemClickHandler}>
                            <div className={'resultText'}>
                                <div className={'resultText__name'}>{item.name}</div>
                                <div className={'resultText__fullname'}>{item.fullName}</div>
                            </div>
                            <img className={'result__img'} src={item.flag} alt={item.name} />
                        </div>
                    )
                }
            </div>
        </div>
    )
}