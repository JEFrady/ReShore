// import React from 'react'
// import styled from 'styled-components'
// import ReactDOM from 'react-dom'

// const ModalContainer = styled.div`
//   background-color: white;
//   border-radius: 3px;
//   box-shadow: 0 4px 5px -2px black;
//   overflow: hidden;
// `

// const Title = styled.div`
//   background-color: Blue;
//   color: White;
//   display: flex;
//   justify-content: space-between;
//   padding: 5px;
// `

// const Content = styled.div`
//   background-color: White;
//   padding: 10px;
// `

// const CloseButton = styled.button`
//   background-color: transparent;
//   border: none;
//   color: White;
//   cursor: pointer;
//   font-size: 20px;
//   line-height: 20px;
// `

// const Overlay = styled.div`
//   align-items: center;
//   background: rgba(0, 0, 0, 0.5);
//   bottom: 0;
//   display: flex;
//   justify-content: center;
//   left: 0;
//   position: absolute;
//   right: 0;
//   top: 0;

//   ${ModalContainer} {
//     max-width: 500px;
//     width: 40%;
//   }
// `

// export const UIModal: React.SFC = ({ children }) => (
//   <ModalContainer>
//     <Title>
//       {title}
//       <CloseButton onClick={onClose}>&times;</CloseButton>
//     </Title>
//     <Content>{children}</Content>
//   </ModalContainer>
// )

// export class Modal extends React.Component<Props> {
//   constructor(props) {
//     super(props)
//     this.modalEl = document.getElementById('modal')
//   }
//   render() {
//     const overlay = (
//       <Overlay>
//         <UIModal {...this.props} />
//       </Overlay>
//     )
//     return ReactDOM.createPortal(overlay, this.modalEl)
//   }
// }