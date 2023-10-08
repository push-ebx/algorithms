import styles from "./style.module.scss"
import { useEffect, useState } from "react";
import {Input, Button} from "shared/ui";
import AuthService from "../../shared/api/auth";

const AuthPage = () => {
  const [isSignIn, setIsSignIn] = useState(true)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [repeatPassword, setRepeatPassword] = useState('')
  const [email, setEmail] = useState('')
  const [first_name, setFirst_name] = useState('')
  const [last_name, setLast_name] = useState('')

  useEffect(() => {
    (async () => {
      const users = await AuthService.fetchUser()
      console.log(users)
    })()
  }, [])

  const SignIn = () => {
    return (
      <>
        <span className={styles.title}>Sign in</span>
        <Input
          className={styles.input}
          value={username}
          onChange={u => setUsername(u)}
          placeholder={'username'}
        />
        <Input
          className={styles.input}
          value={password}
          onChange={setPassword}
          placeholder={'password'}
        />
        <Button
          className={styles.button}
          onClick={async () => {
            await AuthService.login(username, password)
          }}
        >
          Sign in
        </Button>
      </>
    )
  }

  const SignUp = () => {
    return (
      <>
        <span className={styles.title}>Sign up</span>
        <Input
          className={styles.input}
          value={username}
          onChange={setUsername}
          placeholder={'username'}
        />
        <Input
          className={styles.input}
          value={email}
          onChange={setEmail}
          placeholder={'email'}
        />
        <Input
          className={styles.input}
          value={first_name}
          onChange={setFirst_name}
          placeholder={'first name'}
        />
        <Input
          className={styles.input}
          value={last_name}
          onChange={setLast_name}
          placeholder={'last name'}
        />
        <Input
          className={styles.input}
          value={password}
          onChange={setPassword}
          placeholder={'password'}
        />
        <Input
          className={styles.input}
          value={repeatPassword}
          onChange={setRepeatPassword}
          placeholder={'repeat password'}
        />
        <Button
          className={styles.button}
          onClick={ async () => {
            if (repeatPassword !== password || !password.trim()) return
            await AuthService.registration({username, password, first_name, last_name, sex: "Male", email})
          }}
        >
          Sign up
        </Button>
      </>
    )
  }

  return (
    <div className={styles.page}>
      <div className={styles.form_wrapper}>
        <div className={styles.form}>
          {
            isSignIn ? SignIn() : SignUp()
          }
        </div>
        <Button
          onClick={() => setIsSignIn(prev => !prev)}
        >
          Switch
        </Button>
      </div>
    </div>
  );
}

export default AuthPage