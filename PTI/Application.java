import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    // Entidade PessoaFisica
    public static class PessoaFisica {
        private String nomeCompleto;
        private String cpf;
        private String dataNasc;
        private String enderecos;
        private String senha;

        public PessoaFisica() {}

        public PessoaFisica(String nomeCompleto, String cpf, String dataNasc, String enderecos, String senha) {
            this.nomeCompleto = nomeCompleto;
            this.cpf = cpf;
            this.dataNasc = dataNasc;
            this.enderecos = enderecos;
            this.senha = senha;
        }

        public String getNomeCompleto() { return nomeCompleto; }
        public void setNomeCompleto(String nomeCompleto) { this.nomeCompleto = nomeCompleto; }
        public String getCpf() { return cpf; }
        public void setCpf(String cpf) { this.cpf = cpf; }
        public String getDataNasc() { return dataNasc; }
        public void setDataNasc(String dataNasc) { this.dataNasc = dataNasc; }
        public String getEnderecos() { return enderecos; }
        public void setEnderecos(String enderecos) { this.enderecos = enderecos; }
        public String getSenha() { return senha; }
        public void setSenha(String senha) { this.senha = senha; }
    }

    // Entidade PessoaJuridica
    public static class PessoaJuridica {
        private String nomeEmpresa;
        private String cnpj;
        private String porte;
        private String endereco;
        private String senha;

        public PessoaJuridica() {}

        public PessoaJuridica(String nomeEmpresa, String cnpj, String porte, String endereco, String senha) {
            this.nomeEmpresa = nomeEmpresa;
            this.cnpj = cnpj;
            this.porte = porte;
            this.endereco = endereco;
            this.senha = senha;
        }

        public String getNomeEmpresa() { return nomeEmpresa; }
        public void setNomeEmpresa(String nomeEmpresa) { this.nomeEmpresa = nomeEmpresa; }
        public String getCnpj() { return cnpj; }
        public void setCnpj(String cnpj) { this.cnpj = cnpj; }
        public String getPorte() { return porte; }
        public void setPorte(String porte) { this.porte = porte; }
        public String getEndereco() { return endereco; }
        public void setEndereco(String endereco) { this.endereco = endereco; }
        public String getSenha() { return senha; }
        public void setSenha(String senha) { this.senha = senha; }
    }

    // Repositório PessoaFisicaRepository
    public static class PessoaFisicaRepository {
        private List<PessoaFisica> pessoas = new ArrayList<>();

        public void salvar(PessoaFisica pessoa) {
            pessoas.add(pessoa);
        }

        public List<PessoaFisica> listar() {
            return pessoas;
        }
    }

    // Repositório PessoaJuridicaRepository
    public static class PessoaJuridicaRepository {
        private List<PessoaJuridica> empresas = new ArrayList<>();

        public void salvar(PessoaJuridica empresa) {
            empresas.add(empresa);
        }

        public List<PessoaJuridica> listar() {
            return empresas;
        }
    }

    // Controlador PessoaFisicaController
    @RestController
    @RequestMapping("/pessoa-fisica")
    public static class PessoaFisicaController {
        private PessoaFisicaRepository repository = new PessoaFisicaRepository();

        @PostMapping
        public void cadastrar(@RequestBody PessoaFisica pessoa) {
            repository.salvar(pessoa);
        }

        @GetMapping
        public List<PessoaFisica> listar() {
            return repository.listar();
        }
    }

    // Controlador PessoaJuridicaController
    @RestController
    @RequestMapping("/pessoa-juridica")
    public static class PessoaJuridicaController {
        private PessoaJuridicaRepository repository = new PessoaJuridicaRepository();

        @PostMapping
        public void cadastrar(@RequestBody PessoaJuridica empresa) {
            repository.salvar(empresa);
        }

        @GetMapping
        public List<PessoaJuridica> listar() {
            return repository.listar();
        }
    }
}