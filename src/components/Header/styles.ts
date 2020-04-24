import styled from 'styled-components';

interface ContainerProps {
  size?: 'small' | 'large';
}

export const Container = styled.div<ContainerProps>`
  background: #5636d3;
  padding: 30px 0;

  header {
    max-width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      a {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        transition: opacity 0.2s;
        opacity: 0.8;
        position: relative;

        & + a {
          margin-left: 32px;
        }

        &:hover {
          opacity: 1;
        }
        &.active {
          opacity: 1;
        }
        &.active::after {
          content: '';
          background: #ff872c;
          opacity: 1;
          width: 100%;
          height: 2px;
          position: absolute;
          bottom: -10px;
          left: 0;
        }
      }
    }
  }
`;
