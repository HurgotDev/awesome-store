import { HeaderSearch, HeaderSearchButton } from './styled'
import { SearchInput } from '../relevant'

export default function headerSearch() {
    return <HeaderSearch>
        <form id='header_search_form'>
            <SearchInput type='text' placeholder='Buscar productos' />
            <HeaderSearchButton><img src='/images/search.png' alt='' /></HeaderSearchButton>
        </form>
    </HeaderSearch>
}