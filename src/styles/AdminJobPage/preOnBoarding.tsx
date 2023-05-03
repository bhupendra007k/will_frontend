import styled from 'styled-components'
import User from 'assets/images/tabImage.png'
import TabStartImg from 'assets/images/tabStartImg.png'
import TabActiveStart from 'assets/images/tabActiveStartImg.png'
import TabLastImg from 'assets/images/tabLastImg.png'
import TabActiveImg from 'assets/images/tabActiveImg.png'

export const ContentWrapper = styled.div`
  background: #ffffff;
  border-radius: 20px;
  padding: 20px;
  z-index: 1;

  .ant-tabs-top > .ant-tabs-nav::before {
    border: none;
  }
  .ant-tabs-tab {
    width: 186px;
    background: url(${User});
    background-position: center;
    background-repeat: no-repeat;
  }

  .ant-tabs-tab:first-child {
    width: 186px;
    background: url(${TabStartImg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #ffffff;
    font-size: 16px;
    line-height: 19px;
    font-family: 'Inter-Medium';
  }

  .ant-tabs-tab-active:first-child {
    width: 186px;
    background: url(${TabActiveStart});
    background-position: center;
    background-repeat: no-repeat;
  }

  .ant-tabs-tab + .ant-tabs-tab {
    margin: 0px;
  }

  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    font-size: 16px;
    line-height: 19px;
  }

  .ant-tabs-tab-btn {
    margin: auto;
    font-size: 16px;
    line-height: 19px;
    font-family: 'Inter-Regular';
    color: #909090;
  }

  .ant-tabs-tab-active {
    width: 186px;
    background: url(${TabActiveImg});
    background-position: center;
    background-repeat: no-repeat;
  }

  .ant-tabs-tab:last-child {
    width: 186px;
    width: 400px;
    background: url(${TabLastImg});
    background-position: center;
    background-repeat: no-repeat;
  }

  .ant-tabs-ink-bar {
    background-color: transparent;
  }
`
