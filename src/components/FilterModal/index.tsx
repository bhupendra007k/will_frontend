import React, { useState } from 'react'
import { Modal, Button } from 'antd'

const FilterModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <>
      <Button type="primary" onClick={showModal}></Button>

      <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}></Modal>
    </>
  )
}

export default FilterModal
