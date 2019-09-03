import createEventTargetHook from 'create-event-target-hook';
const useWindow = createEventTargetHook(window);
export default fn => {
  const [_, hookEvent] = useWindow('keyup', fn);
  const cleanUp = () => hookEvent();
  return [cleanUp];
};
