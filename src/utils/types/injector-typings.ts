import { RootState } from 'types';
import { Saga } from 'redux-saga';
import { SagaInjectionModes } from 'redux-injectors';
import { Reducer, AnyAction } from '@reduxjs/toolkit';

type RequiredRootState = Required<RootState>;

export type RootStateKeyType = keyof RootState;

export type InjectedReducersType = {
  [P in RootStateKeyType]?: Reducer<RequiredRootState[P], AnyAction>;
};
export interface InjectReducerParams<Key extends RootStateKeyType> {
  key: Key;
  reducer: Reducer<RequiredRootState[Key], AnyAction>;
}

export interface InjectSagaParams {
  key: RootStateKeyType | string;
  saga: Saga;
  mode?: SagaInjectionModes;
}

export type Message = {
  role: string;
  content: string;
};

export type Conversation = {
  title: string;
  messages: Message[];
  subConvos?: Conversation[];
};

export type SubConvo = {
  title: string;
  messages: Message[];
};
