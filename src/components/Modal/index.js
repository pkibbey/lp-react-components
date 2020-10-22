import React from 'react'
import PropTypes from 'prop-types'
import { Flex } from 'rebass'

// TODO: Make modal height auto transition when changing content

function Modal({ bgColor, closeModal, children }) {
  return (
    <Flex
      flex={1}
      onClick={closeModal}
      justifyContent='center'
      alignItems='center'
      sx={{
        position: 'absolute',
        backgroundColor: bgColor,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1,
        cursor: 'pointer'
      }}
    >
      <Flex
        justifyContent='center'
        alignItems='center'
        onClick={(event) => event.stopPropagation()}
        sx={{
          display: 'flex',
          maxHeight: '800px',
          minWidth: '400px',
          maxWidth: '800px',
          width: '100%',
          cursor: 'default'
        }}
      >
        {children}
      </Flex>
    </Flex>
  )
}

Modal.defaultProps = {
  bgColor: 'rgba(0, 0, 0, 0.75)',
  children: null,
  closeModal: undefined
}

Modal.propTypes = {
  bgColor: PropTypes.string,
  children: PropTypes.node,
  closeModal: PropTypes.func
}

export default Modal
