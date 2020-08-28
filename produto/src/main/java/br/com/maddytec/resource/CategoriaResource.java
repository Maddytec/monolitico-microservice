package br.com.maddytec.resource;

import br.com.maddytec.domain.Categoria;
import br.com.maddytec.dto.CategoriaDTO;
import br.com.maddytec.model.PageModel;
import br.com.maddytec.model.PageRequestModel;
import br.com.maddytec.service.CategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value = "categoria")
public class CategoriaResource {

	@Autowired
	private CategoriaService categoriaService;

	@PostMapping
	public ResponseEntity<Categoria> save(@RequestBody @Valid CategoriaDTO categoriaDTO) {
		Categoria categoria = categoriaDTO.converterToCategoria(categoriaDTO);
		categoria = categoriaService.save(categoria);
		return ResponseEntity.status(HttpStatus.CREATED).body(categoria);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Categoria> update(@PathVariable(name = "id") Long id,
			@RequestBody @Valid CategoriaDTO categoriaDTO) {
		Categoria categoria = categoriaDTO.converterToCategoria(categoriaDTO);
		categoria.setId(id);
		categoria = categoriaService.save(categoria);
		return ResponseEntity.status(HttpStatus.OK).body(categoria);
	}

	@GetMapping("/{id}")
	public ResponseEntity<Categoria> findById(@PathVariable(name = "id") Long id) {
		Categoria categoria = categoriaService.findById(id);
		return ResponseEntity.ok().body(categoria);
	}

	@GetMapping
	public ResponseEntity<List<Categoria>> findAll() {
		List<Categoria> categorias = categoriaService.findAll();
		return ResponseEntity.ok(categorias);
	}

	@GetMapping("/lazy") // Lazy loading
	public ResponseEntity<PageModel<Categoria>> findAll(@RequestParam(value = "page", defaultValue = "0") int page,
			@RequestParam(value = "size", defaultValue = "10") int size) {

		PageRequestModel pageRequestModel = new PageRequestModel(page, size);

		PageModel<Categoria> pageModel = categoriaService.findAllOnLazyMode(pageRequestModel);
		return ResponseEntity.ok(pageModel);
	}
	
	//@Secured({ "ROLE_ADMINISTRADORES" })
	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteById(@PathVariable(name = "id") Long id) {
		categoriaService.deleteById(id);
		return ResponseEntity.ok().body(HttpStatus.OK);
	}

}
