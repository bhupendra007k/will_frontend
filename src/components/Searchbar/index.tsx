import { Button, SearchArea, Input, BtnContainer } from 'styles/SearchArea'
import Search from 'assets/images/search.png'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchBar = ({ children }: any) => {
  const searchKeyword: React.Ref<any> = useRef(null)
  const navigate = useNavigate()
  const searchHandler = async () => {
    navigate(`/jobs?keyword=${searchKeyword?.current?.value}`)

    console.log(searchKeyword?.current?.value)
  }

  return (
    <SearchArea>
      <Input ref={searchKeyword} placeholder="Job title or Company"></Input>
      <BtnContainer>
        <Button className="button" onClick={searchHandler}>
          <img src={Search}></img>
          {children}
        </Button>
      </BtnContainer>
    </SearchArea>
  )
}

export default SearchBar
