import style from './loader.module.scss';

export const Loader = () => {
  return (
    <div className={style.loader_wrapper}>
    <div className={style.loader}></div>
    </div>
  )
}
