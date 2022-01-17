import store from "./store";
import { addBug, removeBug, resolveBug } from "./actions";

const unsubscribe = store.subscribe(() => console.log("store Change !! ", store.getState()));

store.dispatch(addBug("bug1"))

unsubscribe();

store.dispatch(removeBug(1))

store.dispatch(resolveBug(1))
