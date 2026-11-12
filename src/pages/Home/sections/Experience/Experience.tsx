import { Box, Card, CardContent, Chip, Container, Stack, Typography } from "@mui/material";
import { education, experience } from "../../../../service/experience";

const Experience = () => (
  <Box component="section" id="experiencia" sx={{ py: { xs: 7, md: 10 }, backgroundColor: "background.paper" }}>
    <Container maxWidth="lg" sx={{ px: { xs: 1.5, sm: 3 } }}>
      <Typography variant="h2" color="primary.main" textAlign="center" gutterBottom>
        Experiência
      </Typography>
      <Typography color="secondary.main" textAlign="center" sx={{ maxWidth: 760, mx: "auto", mb: 5 }}>
        Desenvolvimento de sistemas, dados ambientais e infraestrutura aplicados a problemas reais.
      </Typography>
      <Stack spacing={3}>
        {experience.map((item) => (
          <Card key={`${item.organization}-${item.role}`} sx={{ backgroundColor: "background.default" }}>
            <CardContent sx={{ p: { xs: 2.5, sm: 3, md: 4 }, overflowWrap: "anywhere" }}>
              <Stack direction={{ xs: "column", md: "row" }} justifyContent="space-between" gap={1}>
                <Box>
                  <Typography variant="h3" sx={{ fontSize: { xs: "1.35rem", md: "1.65rem" } }} color="primary.main">
                    {item.role}
                  </Typography>
                  <Typography color="secondary.main">{item.organization}</Typography>
                </Box>
                <Chip label={item.period} color="primary" variant="outlined" sx={{ alignSelf: { xs: "flex-start", md: "center" } }} />
              </Stack>
              <Typography color="secondary.main" sx={{ mt: 2, lineHeight: 1.8 }}>
                {item.summary}
              </Typography>
              <Box component="ul" sx={{ color: "secondary.main", pl: 3, mb: 0, lineHeight: 1.8 }}>
                {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </Box>
            </CardContent>
          </Card>
        ))}
        <Card sx={{ backgroundColor: "background.default" }}>
          <CardContent sx={{ p: { xs: 3, md: 4 } }}>
            <Typography variant="h3" sx={{ fontSize: { xs: "1.35rem", md: "1.65rem" } }} color="primary.main">
              {education.course}
            </Typography>
            <Typography color="secondary.main">
              {education.institution} · {education.period} · {education.status}
            </Typography>
          </CardContent>
        </Card>
      </Stack>
    </Container>
  </Box>
);

export default Experience;
