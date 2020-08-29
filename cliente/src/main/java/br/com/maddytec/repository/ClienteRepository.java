package br.com.maddytec.repository;

import br.com.maddytec.domain.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Long> {
		
	public Optional<Cliente> findByEmail(String email);
	
}
