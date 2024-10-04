import './Forms.css'

const Forms = () => {
  return (
    <div>
      <form>
      <h2>Cadastro de Novos Usuários</h2>
        <label htmlFor="">Nome:</label>
        <input type="text" />
        <label htmlFor="">Email:</label>
        <input type="email" />
        <label htmlFor="">Senha:</label>
        <input type="password" />
        <label htmlFor="">Confirmar Senha:</label>
        <input type="password" />        
      </form>
      </div>
  )
}

export default Forms