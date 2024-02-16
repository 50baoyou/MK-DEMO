# 请求头发送token和获取用户信息

## 请求头发送token

登录后的token数据已经持久化到状态管理中，然后我们需要通过这个token进行API接口的校验工作，所以需要在请求头中进行携带。

主要就是在axios的请求拦截器中统一添加请求头。

```typescript
// /utils/http.ts
import store from '../store';
instance.interceptors.request.use(function (config) {
  if(config.headers){
    config.headers.authorization = store.getState().users.token;
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});
```

然后就是在状态管理中完成获取用户信息的接口。

```typescript
// /store/modules/users.ts
import http from '../../utils/http';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
type Token = string;
export type Infos = {
  [index: string]: unknown
}
export type UsersState = {
  token: Token
  infos: Infos
}
type Login = {
  email: string 
  pass: string
}
export const loginAction = createAsyncThunk('users/loginAction', async (payload: Login) => {
  const ret = await http.post('/users/login', payload)
  return ret;
})
export const infosAction = createAsyncThunk('users/infosAction', async ()=>{
  const ret = await http.get('/users/infos')
  return ret; 
})
const usersSlice = createSlice({
  name: 'users',
  initialState: {
    token: '',
    infos: {}
  } as UsersState,
  reducers: {
    updateToken(state, action: PayloadAction<Token>){
      state.token = action.payload;
    },
    updateInfos(state, action: PayloadAction<Infos>){
      state.infos = action.payload;
    },
    clearToken(state){
      state.token = '';
    }
  }
})
export const { updateToken, updateInfos, clearToken } = usersSlice.actions;
export default usersSlice.reducer;
```

接下来就是在`<BeforeEach>`组件中进行用户身份的校验。

```tsx
// /components/BeforeEach/BeforeEach.tsx
import React from 'react'
import { useLocation, matchRoutes, Navigate } from 'react-router-dom'
import { routes } from '../../router'
import { useAppDispatch } from '../../store'
import { infosAction } from '../../store/modules/users'
import type { Infos } from '../../store/modules/users'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store'
import _ from 'lodash'
interface BeforeEachProps {
  children?: React.ReactNode
}
export default function BeforeEach(props: BeforeEachProps) {
  const infos = useSelector((state: RootState)=> state.users.infos)
  const dispatch = useAppDispatch()
 
  dispatch(infosAction()).then((action)=>{
      const {errcode, infos} = (action.payload as {[index: string]: unknown}).data as {[index: string]: unknown}
  })
}
```

