// ! M_Teeth/Default/FLocalVertexFactory/TMobileBasePassPSFNoLightMapPolicyHDRLinear64EnableLocalLights/0/MobileBasePassPixelShader.usf:Main
// Compiled by ShaderConductor
// @Inputs: f4;10:in_var_TEXCOORD10,f4;11:in_var_TEXCOORD11,f4;0:in_var_TEXCOORD0,f4;8:in_var_TEXCOORD8
// @Outputs: f4;0:out_Target0,f1;1:out_Target1
// @PackedUB: View(0): View_ViewToClip(128,16),View_ViewForward(264,3),View_ViewRectMin(512,4),View_PreExposure(546,1),View_NormalCurvatureToRoughnessScaleBias(732,3),View_SkyLightColor(748,4),View_ReflectionCubemapMaxMip(786,1),View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight(792,3),View_bSubsurfacePostprocessEnabled(987,1),View_SSProfilesTextureSizeAndInvSize(988,4)
// @PackedUB: MobileReflectionCapture(1): MobileReflectionCapture_Params(0,4)
// @PackedUB: Primitive(2): Primitive_Flags(0,1)
// @PackedUB: MobileBasePass(3): MobileBasePass_Forward_NumLocalLights(52,1),MobileBasePass_Forward_CulledGridSize(56,3),MobileBasePass_Forward_LightGridPixelSizeShift(60,1),MobileBasePass_Forward_LightGridZParams(64,3)
// @PackedUB: MobileDirectionalLight(4): MobileDirectionalLight_DirectionalLightColor(0,4),MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition(4,4),MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale(12,4),MobileDirectionalLight_DirectionalLightShadowMapChannelMask(84,1)
// @PackedUB: Material(5): Material_PreshaderBuffer_1(4,4),Material_PreshaderBuffer_2(8,4),Material_PreshaderBuffer_3(12,4),Material_PreshaderBuffer_4(16,4),Material_PreshaderBuffer_5(20,4),Material_PreshaderBuffer_6(24,4),Material_PreshaderBuffer_7(28,4)
// @PackedUBCopies: 0:128-0:h:0:16,0:264-0:m:0:3,0:512-0:m:4:4,0:546-0:h:16:1,0:732-0:h:20:3,0:748-0:h:24:4,0:786-0:m:8:1,0:792-0:h:28:3,0:987-0:h:32:1,0:988-0:h:36:4,1:0-1:h:0:4,2:0-2:u:0:1,3:52-3:u:0:1,3:56-3:i:0:3,3:60-3:u:4:1,3:64-3:h:0:3,4:0-4:m:0:4,4:4-4:m:4:4,4:12-4:m:8:4,4:84-4:u:0:1,5:4-5:h:0:4,5:8-5:h:4:4,5:12-5:h:8:4,5:16-5:h:12:4,5:20-5:h:16:4,5:24-5:h:20:4,5:28-5:h:24:4
// @Samplers: MobileBasePass_Forward_ForwardLocalLightBuffer(0:1),MobileBasePass_Forward_NumCulledLightsGrid(1:1),MobileBasePass_Forward_CulledLightDataGrid(2:1),View_SSProfilesTexture(3:1[View_SSProfilesSampler]),View_SSProfilesPreIntegratedTexture(4:1[View_SSProfilesPreIntegratedSampler]),MobileReflectionCapture_Texture(5:1[MobileReflectionCapture_TextureSampler]),Material_Texture2D_0(6:1[Material_Texture2D_0Sampler]),Material_Texture2D_1(7:1[Material_Texture2D_1Sampler]),Material_Texture2D_2(8:1[Material_Texture2D_2Sampler]),Material_Texture2D_3(9:1[Material_Texture2D_3Sampler]),Material_Texture2D_4(10:1[Material_Texture2D_4Sampler]),Material_Texture2D_5(11:1[Material_Texture2D_5Sampler]),Material_Texture2D_6(12:1[Material_Texture2D_6Sampler]),Material_Texture2D_7(13:1[Material_Texture2D_7Sampler]),Material_Texture2D_8(14:1[Material_Texture2D_8Sampler]),Material_Texture2D_9(15:1[Material_Texture2D_9Sampler]),Material_Texture2D_10(16:1[Material_Texture2D_10Sampler])
#version 320 es
#if defined(GL_EXT_control_flow_attributes)
#define out_var_SV_Target1 out_Target1
#define out_var_SV_Target0 out_Target0
#define in_var_TEXCOORD8 in_TEXCOORD8
#define in_var_TEXCOORD0 in_TEXCOORD0
#define in_var_TEXCOORD11 in_TEXCOORD11
#define in_var_TEXCOORD10 in_TEXCOORD10
#extension GL_EXT_control_flow_attributes : require
#define SPIRV_CROSS_FLATTEN [[flatten]]
#define SPIRV_CROSS_BRANCH [[dont_flatten]]
#define SPIRV_CROSS_UNROLL [[unroll]]
#define SPIRV_CROSS_LOOP [[dont_unroll]]
#else
#define SPIRV_CROSS_FLATTEN
#define SPIRV_CROSS_BRANCH
#define SPIRV_CROSS_UNROLL
#define SPIRV_CROSS_LOOP
#endif
precision mediump float;
precision highp int;

#define View_SSProfilesTextureSizeAndInvSize (pc0_h[9])
#define View_bSubsurfacePostprocessEnabled (pc0_h[8].x)
#define View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight (pc0_h[7].xyz)
#define View_ReflectionCubemapMaxMip (pc0_m[2].x)
#define View_SkyLightColor (pc0_h[6])
#define View_NormalCurvatureToRoughnessScaleBias (pc0_h[5].xyz)
#define View_PreExposure (pc0_h[4].x)
#define View_ViewRectMin (pc0_m[1])
#define View_ViewForward (pc0_m[0].xyz)
#define View_ViewToClip (mat4(pc0_h[0 + 0].xyzw,pc0_h[0 + 1].xyzw,pc0_h[0 + 2].xyzw,pc0_h[0 + 3].xyzw))
#define SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler ps3
#define SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler ps4
#define SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler ps5
#define SPIRV_Cross_CombinedMaterial_Texture2D_0Material_Texture2D_0Sampler ps6
#define SPIRV_Cross_CombinedMaterial_Texture2D_1Material_Texture2D_1Sampler ps7
#define SPIRV_Cross_CombinedMaterial_Texture2D_2Material_Texture2D_2Sampler ps8
#define SPIRV_Cross_CombinedMaterial_Texture2D_3Material_Texture2D_3Sampler ps9
#define SPIRV_Cross_CombinedMaterial_Texture2D_4Material_Texture2D_4Sampler ps10
#define SPIRV_Cross_CombinedMaterial_Texture2D_5Material_Texture2D_5Sampler ps11
#define SPIRV_Cross_CombinedMaterial_Texture2D_6Material_Texture2D_6Sampler ps12
#define SPIRV_Cross_CombinedMaterial_Texture2D_7Material_Texture2D_7Sampler ps13
#define SPIRV_Cross_CombinedMaterial_Texture2D_8Material_Texture2D_8Sampler ps14
#define SPIRV_Cross_CombinedMaterial_Texture2D_9Material_Texture2D_9Sampler ps15
#define SPIRV_Cross_CombinedMaterial_Texture2D_10Material_Texture2D_10Sampler ps16
uniform mediump vec4 pc0_m[3];
uniform highp vec4 pc0_h[10];


#define MobileReflectionCapture_Params (pc1_h[0])
uniform highp vec4 pc1_h[1];


#define Primitive_Flags (pc2_u[0].x)
uniform uvec4 pc2_u[1];


#define MobileBasePass_Forward_LightGridZParams (pc3_h[0].xyz)
#define MobileBasePass_Forward_LightGridPixelSizeShift (pc3_u[1].x)
#define MobileBasePass_Forward_CulledGridSize (pc3_i[0].xyz)
#define MobileBasePass_Forward_NumLocalLights (pc3_u[0].x)
uniform highp vec4 pc3_h[1];
uniform ivec4 pc3_i[1];
uniform uvec4 pc3_u[2];


#define MobileDirectionalLight_DirectionalLightShadowMapChannelMask (pc4_u[0].x)
#define MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale (pc4_m[2])
#define MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition (pc4_m[1])
#define MobileDirectionalLight_DirectionalLightColor (pc4_m[0])
uniform uvec4 pc4_u[1];
uniform mediump vec4 pc4_m[3];


#define Material_PreshaderBuffer_7 (pc5_h[6])
#define Material_PreshaderBuffer_6 (pc5_h[5])
#define Material_PreshaderBuffer_5 (pc5_h[4])
#define Material_PreshaderBuffer_4 (pc5_h[3])
#define Material_PreshaderBuffer_3 (pc5_h[2])
#define Material_PreshaderBuffer_2 (pc5_h[1])
#define Material_PreshaderBuffer_1 (pc5_h[0])
uniform highp vec4 pc5_h[7];


layout(binding = 0) uniform highp samplerBuffer ps0;
layout(binding = 1) uniform highp usamplerBuffer ps1;
layout(binding = 2) uniform highp usamplerBuffer ps2;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_0Material_Texture2D_0Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_1Material_Texture2D_1Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_2Material_Texture2D_2Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_3Material_Texture2D_3Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_4Material_Texture2D_4Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_5Material_Texture2D_5Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_6Material_Texture2D_6Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_7Material_Texture2D_7Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_8Material_Texture2D_8Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_9Material_Texture2D_9Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_10Material_Texture2D_10Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler;
uniform highp sampler2DArray SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler;
uniform highp samplerCube SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler;

layout(location = 0) in vec4 in_var_TEXCOORD10;
layout(location = 1) in vec4 in_var_TEXCOORD11;
layout(location = 2) in highp vec4 in_var_TEXCOORD0[1];
layout(location = 3) in highp vec4 in_var_TEXCOORD8;
layout(location = 0) out vec4 out_var_SV_Target0;
layout(location = 1) out highp float out_var_SV_Target1;

vec4 _475;
vec3 _476;

void main()
{
    highp vec3 _506;
    if (View_ViewToClip[3].w >= 1.0)
    {
        _506 = -View_ViewForward;
    }
    else
    {
        _506 = normalize(-in_var_TEXCOORD8.xyz);
    }
    vec2 _176 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_0Material_Texture2D_0Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y)).xy * vec2(2.0)) - vec2(1.0);
    highp vec3 _517 = vec4(_176, sqrt(clamp(1.0 - dot(_176, _176), 0.0, 1.0)), 1.0).xyz * Material_PreshaderBuffer_1.xyz;
    float _84 = _517.z + 1.0;
    vec2 _183 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_1Material_Texture2D_1Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y)).xy * vec2(2.0)) - vec2(1.0);
    highp vec4 _528 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_2Material_Texture2D_2Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    highp float _531 = _528.x * Material_PreshaderBuffer_1.w;
    vec3 _88 = vec4(_183, sqrt(clamp(1.0 - dot(_183, _183), 0.0, 1.0)), 1.0).xyz * vec3(_531, _531, 1.0);
    vec3 _93 = vec3(_517.xy, _84);
    vec3 _97 = vec3(_88.xy * vec2(-1.0), _88.z);
    vec3 _103 = (_93 * vec3(dot(_93, _97))) - (vec3(_84) * _97);
    float _105 = _103.z + 1.0;
    vec2 _190 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_3Material_Texture2D_3Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y) * vec2(Material_PreshaderBuffer_2.x)).xy * vec2(2.0)) - vec2(1.0);
    highp vec3 _544 = mix(vec3(0.0, 0.0, 1.0), vec4(_190, sqrt(clamp(1.0 - dot(_190, _190), 0.0, 1.0)), 1.0).xyz, vec3(Material_PreshaderBuffer_2.y));
    vec3 _113 = vec3(_103.xy, _105);
    vec3 _117 = vec3(_544.xy * vec2(-1.0), _544.z);
    vec3 _123 = (_113 * vec3(dot(_113, _117))) - (vec3(_105) * _117);
    float _125 = _123.z + 1.0;
    highp vec4 _548 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_4Material_Texture2D_4Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    vec2 _197 = (_548.xy * vec2(2.0)) - vec2(1.0);
    highp float _551 = sqrt(clamp(1.0 - dot(_197, _197), 0.0, 1.0));
    vec3 _130 = vec3(_123.xy, _125);
    vec3 _133 = vec3(vec4(_197, _551, 1.0).xy * vec2(-1.0), _551);
    vec3 _140 = normalize(mat3(in_var_TEXCOORD10.xyz, cross(in_var_TEXCOORD11.xyz, in_var_TEXCOORD10.xyz) * in_var_TEXCOORD11.w, in_var_TEXCOORD11.xyz) * ((_130 * vec3(dot(_130, _133))) - (vec3(_125) * _133))) * 1.0;
    highp vec3 _556 = (-_506) + ((_140 * dot(_140, _506)) * 2.0);
    highp vec4 _560 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_5Material_Texture2D_5Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    highp vec4 _567 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_6Material_Texture2D_6Sampler, Material_PreshaderBuffer_3.xy);
    highp vec4 _571 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_7Material_Texture2D_7Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    vec3 _141 = _560.xyz;
    highp vec4 _578 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_8Material_Texture2D_8Sampler, Material_PreshaderBuffer_4.xy);
    highp vec4 _584 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_9Material_Texture2D_9Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    float _152 = _584.x;
    vec3 _154 = mix(mix(_141, _567.xyz * (_141 / _571.xyz), vec3(0.669921875)), (_578.xyz * (_141 * vec3(1.0380132198333740234375, 1.27521789073944091796875, 1.815602779388427734375))) * vec3(Material_PreshaderBuffer_4.z), vec3(_152));
    highp vec4 _591 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_10Material_Texture2D_10Sampler, Material_PreshaderBuffer_5.yz);
    float _206 = _591.x;
    float _207 = _591.y;
    float _204 = _591.z;
    vec3 _163 = _528.xyz;
    vec3 _165 = normalize(in_var_TEXCOORD11.xyz);
    float _213 = clamp((_163 * vec3(smoothstep(0.0, Material_PreshaderBuffer_6.z, dot(((vec3(dot(_506, _165)) * _165) * vec3(2.0)) - _506, _506)) * 0.449951171875)).x, 0.0, 1.0);
    highp float _613 = max(0.015625, clamp(mix(Material_PreshaderBuffer_7.x, Material_PreshaderBuffer_6.w, _152), 0.0, 1.0));
    vec3 _216 = dFdx(_140);
    vec3 _217 = dFdy(_140);
    highp float _619 = clamp(pow(max(dot(_216, _216), dot(_217, _217)), View_NormalCurvatureToRoughnessScaleBias.z), 0.001000000047497451305389404296875, 1.0);
    vec3 _221 = vec3(0.07999999821186065673828125 * _213);
    highp vec4 _638 = vec4(float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 1u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 2u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 4u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 8u) != 0u));
    float _229 = mix(1.0, dot(vec4(1.0), _638), dot(_638, vec4(1.0)));
    highp float _642 = max(0.0, dot(_140, normalize(_506 + MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz)));
    uint _645 = uint(((vec4(_476.x, _476.y, _476.z, vec4(1.0, 1.0, 1.0, Material_PreshaderBuffer_7.y).w) * View_bSubsurfacePostprocessEnabled).w * 255.0) + 0.5);
    highp vec2 _654 = (vec2(uvec2(5u, _645)) + vec2(0.5)) * View_SSProfilesTextureSizeAndInvSize.zw;
    highp vec4 _656 = textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, _654, 0.0);
    float _243 = _656.z;
    highp float _659 = max(clamp(_613 * (_656.x * 2.0), 0.0, 1.0), 0.0199999995529651641845703125);
    float _247 = clamp(_613 * (_656.y * 2.0), 0.0, 1.0);
    float _233 = mix(_659, _247, _243);
    float _234 = dot(_140, MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz);
    highp float _666 = float(_645);
    highp vec2 _675 = (vec2(uvec2(0u, _645)) + vec2(0.5)) * View_SSProfilesTextureSizeAndInvSize.zw;
    highp vec3 _678 = vec3(1.0) * max(0.0, dot(_140, MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz));
    vec3 _250 = clamp(mix(_154, _154 * vec3((_206 <= 0.0) ? 0.0 : pow(_206, 0.300048828125), (_207 <= 0.0) ? 0.0 : pow(_207, 0.300048828125), (_204 <= 0.0) ? 0.0 : pow(_204, 0.300048828125)), vec3(_152 * clamp(1.0 - ((1.0 - _584.y) * Material_PreshaderBuffer_6.y), 0.0, 1.0))) * _163, vec3(0.0), vec3(1.0)) * 0.318407952785491943359375;
    highp float _683 = 1.0 - (_642 * _642);
    float _251 = _659 * _659;
    highp float _684 = _642 * _251;
    highp float _686 = _251 / (_683 + (_684 * _684));
    float _255 = _247 * _247;
    highp float _687 = _642 * _255;
    highp float _689 = _255 / (_683 + (_687 * _687));
    vec4 _269 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _233) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
    float _270 = _269.x;
    float _273 = exp2((-9.28125) * clamp(abs(dot(_140, _506)) + 1.0013580322265625e-05, 0.0, 1.0));
    vec2 _280 = (vec2(-1.0400390625, 1.0400390625) * ((min(_270 * _270, _273) * _270) + _269.y)) + _269.zw;
    float _264 = clamp(_213 * 4.0, 0.0, 1.0);
    highp vec2 _701 = gl_FragCoord.xy - View_ViewRectMin.xy;
    uvec2 _728 = uvec2(uint(_701.x), uint(_701.y)) >> (uvec2(MobileBasePass_Forward_LightGridPixelSizeShift) & uvec2(31u));
    vec3 _360;
    if (float(MobileReflectionCapture_Params.y > 0.0) != 0.0)
    {
        _360 = textureLod(SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler, _556, (MobileReflectionCapture_Params.y - 1.0) - (1.0 - (1.2001953125 * log2(max(_613, 0.00100040435791015625))))).xyz * View_SkyLightColor.xyz;
    }
    else
    {
        _360 = textureLod(SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler, _556, (View_ReflectionCubemapMaxMip - 1.0) - (1.0 - (1.2001953125 * log2(max(_613, 0.00100040435791015625))))).xyz * MobileReflectionCapture_Params.w;
    }
    vec4 _304 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _613) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
    float _305 = _304.x;
    vec2 _313 = (vec2(-1.0400390625, 1.0400390625) * ((min(_305 * _305, _273) * _305) + _304.y)) + _304.zw;
    uint _774 = ((((min(uint(max(0.0, log2(((1.0 / gl_FragCoord.w) * MobileBasePass_Forward_LightGridZParams.x) + MobileBasePass_Forward_LightGridZParams.y) * MobileBasePass_Forward_LightGridZParams.z)), uint(MobileBasePass_Forward_CulledGridSize.z - 1)) * uint(MobileBasePass_Forward_CulledGridSize.y)) + _728.y) * uint(MobileBasePass_Forward_CulledGridSize.x)) + _728.x) * 2u;
    uvec4 _782 = texelFetch(ps1, int(_774 + 1u));
    uint _783 = _782.x;
    uint _798 = (uint((Primitive_Flags & 1024u) != 0u) | (uint((Primitive_Flags & 2048u) != 0u) << 1u)) | (uint((Primitive_Flags & 4096u) != 0u) << 2u);
    uint _799 = min(min(texelFetch(ps1, int(_774)).x, MobileBasePass_Forward_NumLocalLights), MobileBasePass_Forward_NumLocalLights);
    highp vec3 _801;
    _801 = ((((mix(_678 * _229, textureLod(SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler, vec3((max(_234 - (max(2.0 * _234, 0.4000000059604644775390625) * (1.0 - sqrt(_229))), -1.0) * 0.5) + 0.5, _619, _666), 0.0).xyz, textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, _675, 0.0).xyz) * _250) * 1.0) + ((_678 * (((_221 * _280.x) + vec3(_264 * _280.y)) * (mix(min(_686 * _686, 2048.0), min(_689 * _689, 2048.0), _243) * ((_233 * 0.25) + 0.25)))) * MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale.z)) * (MobileDirectionalLight_DirectionalLightColor.xyz * _229)) + (((_360 * mix(1.0, min(0.0, View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.z), smoothstep(0.0, 1.0, clamp((_613 * View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.x) + View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.y, 0.0, 1.0)))) * 1.0) * ((_221 * _313.x) + vec3(_264 * _313.y)));
    highp vec3 _802;
    SPIRV_CROSS_LOOP
    for (uint _804 = 0u; _804 < _799; _801 = _802, _804++)
    {
        uint _813 = texelFetch(ps2, int(_783 + _804)).x * 6u;
        highp vec4 _815 = texelFetch(ps0, int(_813));
        highp vec4 _817 = texelFetch(ps0, int(_813 + 1u));
        highp vec4 _819 = texelFetch(ps0, int(_813 + 2u));
        highp vec4 _821 = texelFetch(ps0, int(_813 + 3u));
        highp float _822 = _815.w;
        highp float _823 = _822 * _822;
        highp vec3 _824 = _815.xyz;
        highp vec3 _825 = in_var_TEXCOORD8.xyz - _824;
        if ((dot(_825, _825) * _823) > 1.0)
        {
            _802 = _801;
            continue;
        }
        uint _832 = floatBitsToUint(_819.w);
        if (((_832 >> 8u) & _798) == 0u)
        {
            _802 = _801;
            continue;
        }
        highp float _841 = _817.w;
        highp vec4 _856 = vec4(float((_832 & 1u) != 0u), float((_832 & 2u) != 0u), float((_832 & 4u) != 0u), float((_832 & 8u) != 0u));
        highp vec3 _857 = _824 - in_var_TEXCOORD8.xyz;
        highp float _858 = dot(_857, _857);
        highp vec3 _860 = _857 * inversesqrt(_858);
        highp float _877;
        if (_841 == 0.0)
        {
            highp float _869 = _858 * _823;
            highp float _872 = clamp(1.0 - (_869 * _869), 0.0, 1.0);
            _877 = (_872 * _872) * (1.0 / (_858 + 1.0));
        }
        else
        {
            highp vec3 _864 = _857 * _822;
            _877 = pow(1.0 - clamp(dot(_864, _864), 0.0, 1.0), _841);
        }
        highp float _888;
        if (((_832 >> 16u) & 3u) == 2u)
        {
            highp float _885 = clamp((dot(_860, _819.xyz) - _821.x) * _821.y, 0.0, 1.0);
            _888 = _877 * (_885 * _885);
        }
        else
        {
            _888 = _877;
        }
        highp vec3 _935;
        SPIRV_CROSS_BRANCH
        if (_888 > 0.0)
        {
            float _317 = mix(1.0, dot(vec4(1.0), _856), dot(_856, vec4(1.0)));
            highp float _896 = max(0.0, dot(_140, normalize(_506 + _860)));
            highp vec4 _898 = textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, _654, 0.0);
            float _327 = _898.z;
            highp float _901 = max(clamp(_613 * (_898.x * 2.0), 0.0, 1.0), 0.0199999995529651641845703125);
            float _331 = clamp(_613 * (_898.y * 2.0), 0.0, 1.0);
            float _318 = mix(_901, _331, _327);
            float _319 = dot(_140, _860);
            highp vec3 _913 = vec3(1.0) * max(0.0, dot(_140, _860));
            highp float _918 = 1.0 - (_896 * _896);
            float _334 = _901 * _901;
            highp float _919 = _896 * _334;
            highp float _921 = _334 / (_918 + (_919 * _919));
            float _338 = _331 * _331;
            highp float _922 = _896 * _338;
            highp float _924 = _338 / (_918 + (_922 * _922));
            vec4 _350 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _318) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
            float _351 = _350.x;
            vec2 _359 = (vec2(-1.0400390625, 1.0400390625) * ((min(_351 * _351, _273) * _351) + _350.y)) + _350.zw;
            _935 = (((mix(_913 * _317, textureLod(SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler, vec3((max(_319 - (max(2.0 * _319, 0.4000000059604644775390625) * (1.0 - sqrt(_317))), -1.0) * 0.5) + 0.5, _619, _666), 0.0).xyz, textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, _675, 0.0).xyz) * _250) * 1.0) + ((_913 * (((_221 * _359.x) + vec3(_264 * _359.y)) * (mix(min(_921 * _921, 2048.0), min(_924 * _924, 2048.0), _327) * ((_318 * 0.25) + 0.25)))) * 1.0)) * ((_817.xyz * _888) * _317);
        }
        else
        {
            _935 = vec3(0.0);
        }
        _802 = _801 + _935;
    }
    vec3 _68 = _801 * 1.0;
    vec4 _361 = vec4(_68.x, _68.y, _68.z, _475.w);
    _361.w = 0.0;
    highp vec3 _939 = min((_361.xyz * View_PreExposure).xyz, vec3(32512.0, 32512.0, 32256.0));
    out_var_SV_Target0 = vec4(_939.x, _939.y, _939.z, _361.w);
    out_var_SV_Target1 = gl_FragCoord.z;
}

