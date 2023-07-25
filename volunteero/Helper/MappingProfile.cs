using AutoMapper;
using volunteero.Models;
using volunteero.DTO;
using Microsoft.Win32;

namespace volunteero.Helper
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Aprovedpost, AprovedDTO>();
            CreateMap<Pendingpost, pendingDTO>();
            CreateMap<AprovedDTO, Aprovedpost>();
            CreateMap<pendingDTO, Pendingpost>();
            CreateMap<PostLikesDTO, PostLike>();
            CreateMap<PostLike, PostLikesDTO>();

        }
    }
}