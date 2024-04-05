import { fireEvent, render, screen } from '@testing-library/react';
import App from '../../App';
import Post from '.';

describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<App/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve um inserir comentarios', ()=>{
        render(<Post/>)
        const textarea = screen.getByPlaceholderText('Digite seu comentario')
        const botao = screen.getByTestId('btn-enviar-comentario')

        // Dispara evento de Mudanca o valor do campo textarea
        fireEvent.change(textarea,{target:{
            value: 'carrinho engracado'
        }})
        
        // Dispara evento de click no botao
        fireEvent.click(botao)
        
        expect(screen.getByText('carrinho engracado')).toBeInTheDocument()
        
    })
});