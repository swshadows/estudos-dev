<p>Utilize um gerenciador de requisições como <a target="_blank" href="https://resttesttest.com">REST Test Test</a> para enviar as requisições para a API</p>
<p>A tabela <a href="API/devsnotes.sql">devsnotes</a> está incluida no arquivo como anexo para importação</p>

<p>Lista de requisições</p>
<ul>
    <li>../API/requests/ping.php
        <ul>
            <li>Aceita qualquer requisição</li>
            <li>Retorna um objeto para pingar a API</li>
            <li>Não altera o banco de dados</li>
        </ul>
    </li>
    <li>../API/requests/get.php?id=<mark>:id</mark>
        <ul>
            <li>Deve ser requisição GET</li>
            <li>Pega um unico objeto do banco de dados e retorna de acordo com o parametro id</li>
            <li>Não altera o banco de dados</li>
        </ul>
    </li>
    <li>../API/requests/getall.php
        <ul>
            <li>Deve ser requisição GET</li>
            <li>Pega todos objetos do banco de dados e retorna</li>
            <li>Não altera o banco de dados</li>
        </ul>
    </li>
    <li>../API/requests/insert.php?title=<mark>:title</mark>&body=<mark>:body</mark>
        <ul>
            <li>Deve ser requisição POST</li>
            <li>Insere um item no banco de dados</li>
            <li>Altera o banco de dados</li>
        </ul>
    </li>
    <li>../API/requests/update.php?id=<mark>:id</mark>
        <ul>
            <li>Deve ser requisição PUT</li>
            <li>Atualiza um item no banco de dados</li>
            <li>Altera o banco de dados</li>
        </ul>
    </li>
    <li>../API/requests/delete.php?id=<mark>:id</mark>
        <ul>
            <li>Deve ser requisição DELETE</li>
            <li>Deleta um item do banco de dados</li>
            <li>Altera o banco de dados</li>
        </ul>
    </li>
</ul>