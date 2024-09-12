package dev.otthon.clientserv.controller;

import dev.otthon.clientserv.dto.ServicoPrestadoDTO;
import dev.otthon.clientserv.model.Cliente;
import dev.otthon.clientserv.model.ServicoPrestado;
import dev.otthon.clientserv.repository.ClienteRepository;
import dev.otthon.clientserv.repository.ServicoPrestadoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

@RestController
@RequestMapping("/api/servicos-prestados")
public class ServicoPrestadoController {

  @Autowired
  private ClienteRepository clienteRepository;
  @Autowired
  private ServicoPrestadoRepository servicoPrestadoRepository;

  @PostMapping
  public ServicoPrestado salvar(@RequestBody ServicoPrestadoDTO dto) {

    LocalDate data = LocalDate.parse(dto.getData(), DateTimeFormatter.ofPattern("dd/MM/yyyy"));
    Long idCliente = dto.getIdCliente();

    Cliente cliente = clienteRepository.findById(idCliente)
      .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Cliente inexistente"));

    ServicoPrestado servicoPrestado = new ServicoPrestado();
    servicoPrestado.setDescricao(dto.getDescricao());
    servicoPrestado.setData(data);
    servicoPrestado.setCliente(cliente);

    return null;
  }

}
