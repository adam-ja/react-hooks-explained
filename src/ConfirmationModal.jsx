import { forwardRef, useImperativeHandle, useRef } from "react";

function ConfirmationModal({ isOpen, onClose }, ref) {
    const closeRef = useRef();
    const denyRef = useRef();
    const confirmRef = useRef();

    /*
     * useImperativeHandle allows us to extend the functionality of refs by exposing additional functions on the ref. In
     * this case, we are allowing the parent component to focus on specific DOM elements within this child component.
     *
     * This hook should not be overused. Most things should be exposed as props (such as the isOpen and onClose props in
     * this example). However, refs can be used for imperative behaviours such as exposing DOM functions that we don't
     * want to have to reimplement in React.
     */
    useImperativeHandle(ref, () => {
        return {
            focusClose: () => closeRef.current.focus(),
            focusDeny: () => denyRef.current.focus(),
            focusConfirm: () => confirmRef.current.focus(),
        }
    }, []);

    if (!isOpen) {
        return null;
    }

    return (
        <div ref={ref}>
            <button ref={closeRef} onClick={onClose}>&times;</button>
            <div>
                <h1>Title</h1>
            </div>
            <div>Do you confirm?</div>
            <div>
                <button ref={denyRef} onClick={onClose}>No</button>
                <button ref={confirmRef} onClick={onClose}>Yes</button>
            </div>
        </div>
    );
}

/*
 * Note the use of forwardRef - this is required to make refs work with custom React components such as this
 * ConfirmationModal by passing the ref from a parent component to a DOM element within the child component.
 *
 * In other words, it lets us expose a DOM node to a parent component using a ref.
 */
export default forwardRef(ConfirmationModal);
