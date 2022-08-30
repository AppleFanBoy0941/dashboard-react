import { useCallback, useEffect, useLayoutEffect, useRef } from 'react';

const useKeyPress = (key, cKeys, callback, node) => {
	const callbackRef = useRef(callback);
	useLayoutEffect(() => {
		callbackRef.current = callback;
	});

	const handleKeyPress = useCallback(
		event => {
			const needsCtrlKey = cKeys.includes('ctrlKey') ? true : false;
			const needsAltKey = cKeys.includes('altKey') ? true : false;
			const needsShiftKey = cKeys.includes('shiftKey') ? true : false;
			const needsMetaKey = cKeys.includes('metaKey') ? true : false;

			const ctrlKey = !needsCtrlKey ? true : event.ctrlKey;
			const shiftKey = !needsShiftKey ? true : event.shiftKey;
			const metaKey = !needsMetaKey ? true : event.metaKey;
			const altKey = !needsAltKey ? true : event.altKey;

			const allKeysPressed = ctrlKey && shiftKey && metaKey && altKey;

			if (key === event.key.toLowerCase() && allKeysPressed) {
				callbackRef.current(event);
			}
		},
		[key, cKeys]
	);

	useEffect(() => {
		const targetNode = node ?? document;
		targetNode && targetNode.addEventListener('keydown', handleKeyPress);

		return () => {
			targetNode && targetNode.removeEventListener('keydown', handleKeyPress);
		};
	}, [handleKeyPress, node]);
};

export default useKeyPress;
