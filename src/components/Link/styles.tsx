import styled from 'styled-components';

const LinkContainer = styled('a')(() => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    cursor: 'pointer',
    textDecoration: 'none',
    color: 'black',
}));

const LinkCharacter = styled('span')<{ $char: string, $hovered: boolean, $delay: number }>(({ $char, $hovered, $delay }) => ({
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    transition: 'transform 0.2s',
    transform: $hovered ? 'translateY(1.2rem)' : 'translateY(0)',
    transitionDelay: `${$delay}s`,
  
    '&:before': {
      content: `'${$char}'`,
      position: 'absolute',
      top: '-1.2rem',
    },
  }));

export { 
    LinkContainer,
    LinkCharacter,
 };