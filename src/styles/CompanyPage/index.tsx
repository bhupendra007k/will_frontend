import styled from 'styled-components'

export const RightSectionWrap = styled.div`
  max-width: 1440px;
  margin: auto;
  padding: 60px;
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
