import styled from 'styled-components';

const styles = `
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0px;
`;

export const Main = styled.div`${styles}`;

export const Black = styled.div`
  ${styles}
  height: 50%;
  background: #000000;
  border: 1px solid #707070;
  top: 0;
`;

export const White = styled.div`
  ${styles}
  height: 50%;
  background: #FFFFFF;
  bottom: 0px;
`;

export const ContainerCrud =styled.div`
  ${styles}
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  .error {
    color: red;
  }
  .E {
    color: #3EC939;
  }
  .L {
    color: #FFA71A;
  }
  .A {
    color: #F00B0B;
  }
  .En {
    border-left: solid 5px #3EC939;
  }
  .Li {
    border-left: solid 5px #FFA71A;
  }
  .Ag {
    border-left: solid 5px #F00B0B;
  }
  .ContainerTable {
    width: 90%;
    height: 100%;
  }
`;