import useEventTarget from 'use-event-target';
const useWindow = useEventTarget(window);
export default fn => {
  const [_, hookEvent] = useWindow('keyup', fn);
  const cleanUp = () => hookEvent();
  return [cleanUp];
};
