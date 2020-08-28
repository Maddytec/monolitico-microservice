package br.com.maddytec.repository;

import br.com.maddytec.domain.Produto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long> {

	public Optional<Produto> findBySku(String sku);
}
