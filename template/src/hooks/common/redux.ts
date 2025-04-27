import {RootState} from '@redux/reducer';
import {AppDispatch} from '@redux/store';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
