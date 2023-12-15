import { render, screen, fireEvent } from "@testing-library/react";
import CounterApp from "../src/CounterApp";
import { element } from "prop-types";

describe('Counter App Test', ()=>{
    test('should show <CounterApp /> correctly', ()=>{
        const { container } = render(<CounterApp value={ 0 } />);
        expect(container).toMatchSnapshot();
    })

    test('should show the default value of 100', () => { 
        render(<CounterApp value={ 100 } />);
        const element = screen.getByRole("heading", { level: 2});
        expect(element.innerHTML).toContain("100");
    });

    test('should increment counter on click', () => { 
        render(<CounterApp value={ 0 } />);
        fireEvent.click( screen.getByRole("button", { name: "btn-increment"}))
        const element = screen.getByRole("heading", { level: 2});
        expect(element.innerHTML).toContain("1");
    });

    test('should decrement counter on click', () => { 
        render(<CounterApp value={ 0 } />);
        fireEvent.click( screen.getByRole("button", { name: "btn-decrement"}))
        const element = screen.getByRole("heading", { level: 2});
        expect(element.innerHTML).toContain("-1");
    });

    test('should reset counter to zero', ()=>{
        render(<CounterApp value={ 0 } />);
        fireEvent.click( screen.getByTestId("btn-reset") );
        const element = screen.getByRole("heading", { level: 2});
        expect(element.innerHTML).toContain("0");
    });
});