import styled from 'styled-components'

export const ContainerWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`

export const JobFilterContainer = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 46px;
  width: 100%;
  max-width: 1580px;
  margin: auto;
  padding: 74px 135px;
  line-height: normal;
  @media (max-width: 1024px) {
    padding: 74px 35px;
  }
  @media (max-width: 768px) {
    padding: 74px 5px;
  }
`

export const ColumnLeft = styled.form`
  max-width: 351px;
  min-width: 188px;
`

export const LeftSection = styled.div`
  margin-bottom: 20px;

  .filterplace {
    color: #000;
    font-size: 18px;
    font-weight: 600;
  }
`

export const RightSectionWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 46px;
`

export const ColumnRight = styled.div`
  display: grid;
  row-gap: 46px;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 46px;
  .card-border {
    display: grid;
    row-gap: 20px;
    padding: 15px 37px;
    border: 2px solid #00000033;
    border-radius: 15px;
    /* min-width: 373px;
    max-height: 213px; */

    p {
      margin: auto;
      font-size: 16px;
      font-weight: 400;
      color: #716f6f;
    }
  }
  .bottom {
    display: flex;
    column-gap: 20px;
    align-items: center;
  }
  .salary {
    font-size: 20px;
    font-weight: 700;
  }
  .salaryamount {
    color: #757575;
  }
  .borderbottom {
    border-bottom: 1px dashed #00000033;
  }
  .top {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;
    h1 {
      min-width: 247px;
      margin: auto;
      font-weight: 700;
    }
    img {
      min-width: 36px;
      max-width: 36px;
      box-shadow: 0 4px 8px 0 rgba(200, 200, 200, 0.2), 0 6px 20px 0 rgba(200, 200, 200, 0.19);
      border-radius: 11px;
    }
  }
`
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`
