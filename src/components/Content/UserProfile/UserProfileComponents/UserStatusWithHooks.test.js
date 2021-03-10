import React from "react";
import { create } from "react-test-renderer";
import UserStatusWithHooks from "./UserStatusWithHooks";

describe("UserStatus component", () => {
    test("UserStatus should has span", () => {
        const component = create(<UserStatusWithHooks status={"proverka"}/>);
        let root = component.root;
        let span = root.findByType("span");
        expect(span.children.length).toBe(1);
    });
    test("Span should has a text like in props", () => {
        const component = create(<UserStatusWithHooks status={"proverka"}/>);
        let root = component.root;
        let span = root.findByType("span")
        expect(span.children[0]).toBe("proverka");
    });
    test("Input should be displayed in EditMode instead of span", () => {
        const component = create(<UserStatusWithHooks status={"proverka"}/>);
        let root = component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick();
        let input = root.findByType("input");
        expect(input.props.value).toBe("proverka");
    });


});